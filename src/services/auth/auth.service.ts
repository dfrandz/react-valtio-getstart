import { ApiResponse } from "../../models/api-response";
import { getData, postData } from "../api/http-base.service";

export class AuthService {


    async register(registerDto: any) {
        let apiResponse: ApiResponse;
        try {
            apiResponse = await postData(`auth/login`, registerDto);
            if (apiResponse.success) {
                console.log(apiResponse.result)
            } else {
                return {
                    success: false,
                    message: apiResponse.message,
                    result: null,
                    errors: apiResponse.errors
                };
            }
        } catch (error) {
            return {
                success: false,
                message: 'Erreur de connexion veuillez réessayer plus tard',
                result: null,
                errors: "Erreur de connexion"
            };
        }
    }

    async getAll() {
        let apiResponse: ApiResponse;
        try {
            apiResponse = await getData(`users`);
            if (apiResponse.success) {

            } else {
                return {
                    success: false,
                    message: apiResponse.message,
                    result: null,
                    errors: apiResponse.errors
                };
            }
        } catch (error) {

        }
    }
}