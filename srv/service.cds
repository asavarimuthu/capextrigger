service triggerService @(path : '/odata/v4') {
    action triggerWorkflow() returns String;
};