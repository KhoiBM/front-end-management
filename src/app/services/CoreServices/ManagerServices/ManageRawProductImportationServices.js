import config from '../../../../environments/config'
import { useHttpModule } from '../../HttpServices'
export class ManageRawProductImportationServices {
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
        return useHttpModule().post(config.useApiPath.api.manageImportedRawProductServices.viewImportedRawProduct, data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //             records:
        //                 [
        //                     {
        //                         importedRawProductCode: 1,
        //                         rawProductCode: 1,
        //                         rawProductName: "afb",
        //                         quantity: 1,
        //                         providedBy: "abvc",
        //                         createdAt: '02-02-2020',
        //                         updatedAt: '02-02-2020'
        //
        //                     }
        //                 ]
        //         }
        //     }
        // })
    }


    static update = (data) => {
        return useHttpModule().post(config.useApiPath.api.manageImportedRawProductServices.addImportedRawProduct, data)
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