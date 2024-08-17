<template>
    <div class="h-screen mx-5 flex flex-col justify-around">
        <HeaderComponent />
        <SummaryMaker/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SummaryMaker from '@/components/summaryMaker/SummaryMaker.vue';
import HeaderComponent from "@/components/HeaderComponent.vue";


export default defineComponent({
    name:'HomePage',
    components:{ SummaryMaker,HeaderComponent },
    setup(){
        //
    }
})
</script>

<style>

</style>