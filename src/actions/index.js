export const ActionTypes = {
    ADD_FEATURE: 'ADD_FEATURE',
    REMOVE_FEATURE: 'REMOVE_FEATURE'
};

export const addFeature = (newFeatureObj) => {
    return {
        type: ActionTypes.ADD_FEATURE,
        payload: newFeatureObj
    };
}

export const removeFeature = (addedFeatureObj) => {
    return {
        type: ActionTypes.REMOVE_FEATURE,
        payload: addedFeatureObj
    };
};