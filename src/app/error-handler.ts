import { ErrorHandler } from '@angular/core';

export class ErrorsHandler implements ErrorHandler {
    handleError(error) {
        console.log("error: ", error)
    }
}