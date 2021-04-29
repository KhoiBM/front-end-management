import config from '../../../../environments/config'
import { useHttpModule } from '../../HttpServices'
export class ManageCustomersRawProductImportationServices {
    // static = (data) => {
    //     // return useHttpModule().post(config.useApiPath.api., data)
    //     return Promise.resolve({
    //         data: {
    //             result: config.useResultStatus.SUCCESS,
    //             info: {

    //             }
    //         }
    //     })
    // }


    static view = (data) => {
        return useHttpModule().post(config.useApiPath.api.manageImportedCusRawProductServices.viewImportedCusRawProduct, data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //             records: [
        //                 {
        //                     importedRawProductID: 1,
        //                     importedRawProductCode: "IRP12345",
        //                     rawProductID: 1,
        //                     rawProductCode: "RP12345",
        //                     rawProductName: "afb",
        //                     quantity: 1,
        //                     providedBy: "abvc",
        //                     createdAt: '02-02-2020',
        //                     updatedAt: '02-02-2020'
        //
        //                 }
        //             ]
        //         }
        //     }
        // })
    }
    static update = (data) => {
        return useHttpModule().post(config.useApiPath.api.manageImportedCusRawProductServices.updateImportedCusRawProduct, data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //
        //         }
        //     }
        // })
    }
}