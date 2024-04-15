

export const retriveAxiosSuccessResponse = (res: any) => {
    return {
        status: res.status,
        message: res.data.message,
        data: res.data.result,
        success: res.data.success,
        error: res.data.error,
    }
};

export const retriveAxiosErrorResponse = (res: any) => {
    if (res.status == 401) {
        location.href = "/";
    }
    return {
        status: res.response.status,
        message: res.response.data.message,
        data: res.response.data.result,
        success: res.response.data.success,
        error: res.response.data.errors
    }
};