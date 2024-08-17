import apiLambda from "@/api/AWSLambdaApi";
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
    name:'ResumeMaker',
    setup(){

        const textToSummarize = ref<string>('')
        const textSummarized = ref<string>('')
        const isError = ref<boolean>(false);
        const errorMsg = ref<string>('');
        const isLoading = ref<boolean>(false);
        const getSummary = async () => {
            isLoading.value = true;
            if( textToSummarize.value.length === 0) {
                isError.value = true;
                errorMsg.value = 'Sorry, we need a propper text, try again'
                isLoading.value = false;
                return;
            }
            
            try {
                const { data } = await apiLambda.post('/getResumeTest/getResumeFromText',{
                    prompt:textToSummarize.value
                });
    
                const { result } = JSON.parse(data.body);
    
                isError.value = false;
                isLoading.value = false;
                textSummarized.value = result;

            } catch (error) {
                console.log(error);
                errorMsg.value = 'Sorry, it ocurred an unexpected error'
                isError.value = true;
                isLoading.value = false;
            }
        }
        return{
            textToSummarize,
            textSummarized: computed( () => textSummarized.value),
            getSummary,
            isError,
            isLoading,
            errorMsg
        }
    }
});