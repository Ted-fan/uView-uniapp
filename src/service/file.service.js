import config from '@/config'
import request from '@/utils/request';

//获取标签书
function getFileApi(params) {
    return request({
        baseUrl: config.fileUrl,
        url: '/minio/getObjectUrl' + params,
        method: 'get'
    });
}

export async function downLoadFile(file) {
    let url = ''
    await getFileApi(file.path).then(res => {
        url = res.data
    })
    uni.showLoading({
        mask: true
    });
    uni.downloadFile({
        url: url,
        success: (res) => {
            if (res.statusCode === 200) {
                uni.hideLoading();
                var filePath = res.tempFilePath;
                uni.openDocument({
                    filePath: filePath,
                    success: function(res) {
                    }
                })
            }
        }
    })
}