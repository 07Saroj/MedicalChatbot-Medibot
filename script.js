
window.watsonAssistantChatOptions = {
    integrationID: "f010c974-1e1d-4f33-ab2f-f6ba8efbd07e", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "a85ec0f3-3c56-4345-b0ec-6f114bffd335", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});
