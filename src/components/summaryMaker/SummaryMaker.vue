<script lang="ts" src="./SummaryMaker.ts"/>
<template>
  <div class="w-full flex flex-col justify-beetween items-center content-center gap-3">
    <div class="w-full flex gap-x-3">
        <div class="w-2/4">
            <label
              for="text-to-resume"
              class="block text-sm font-medium leading-6 text-gray-900">Write the text to summarize here</label>
            <div class="mt-2">
                <textarea
                  id="text-to-resume"
                  name="text-to-resume"
                  rows="15"
                  class="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-2"
                  v-model="textToSummarize"
                  ></textarea>
            </div>
        </div>
        <div class="w-2/4">
            <label for="text-to-resume" class="text-sm font-medium leading-6 text-gray-900">Text summarized</label>
            <div class="mt-2">
                <textarea
                  id="text-to-resume"
                  name="text-to-resume"
                  rows="15"
                  disabled
                  class="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  v-model="textSummarized"
                  ></textarea>
            </div>
        </div>
    </div>
    <button
      type="button"
      class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline 
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disable:bg-black"
      @click="getSummary"
      :disabled="isLoading"
    >
      Get Summary
      
    </button>
    <div v-if="isError" class="bg-red-300 p-2 rounded">
        {{ errorMsg }}
    </div>
  </div>
</template>


<style>

</style>