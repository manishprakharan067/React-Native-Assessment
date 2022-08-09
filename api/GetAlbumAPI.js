import APICommon from './APICommon';
class GetAlbumAPI {
  constructor() {
    this.getAlbumList = async function getAlbumList(
      successCallback,
      errorCallBack,
    ) {
      const req = await new APICommon().getAxiosRequest();
      req
        .get()
        .then(response => {
          successCallback(response);
        })
        .catch(error => {
          errorCallBack(error);
        });
    };
  }
}

export default GetAlbumAPI;
