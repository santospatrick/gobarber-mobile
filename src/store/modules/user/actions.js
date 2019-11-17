export const updateProfileRequest = data => ({
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
});

export const updateProfileSuccess = profile => ({
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
});

export const updateProfileFailure = () => ({
    type: '@user/UPDATE_PROFILE_FAILURE',
});
