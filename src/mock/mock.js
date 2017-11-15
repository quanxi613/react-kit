import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export default {
  doMock() {
    let mock = new MockAdapter(axios);

    // mock success request
    mock.onPost('/doLogin').reply(200, {
      msg: 'success',
      status: 1
    });

    mock.onPost('/delErrorsItem').reply(200, {
        status:1
    })

    mock.onGet('/getErrorsInfo').reply(200, {
      status: 1,
      data: [
        {
          key: 1,
          site: "shixi.189.cn",
          userId: 3,
          position: "/post/index",
          message: "type error!",
          stack: "Type Error",
          ds: '20',
          error_time: '2017-02-13 15:38',
          useragent: 'chrome45,mac'
        },
        {
          key: 2,
          site: "shixi.189.cn",
          userId: 3,
          position: "/post/index",
          message: "type error!",
          stack: "Type Error",
          ds: '12',
          error_time: '2017-02-13 15:38',
          useragent: 'chrome45,mac'
        },
        {
          key: 3,
          site: "shixi.189.cn",
          userId: 3,
          position: "/post/index",
          message: "type error!",
          stack: "Type Error",
          ds: '301',
          error_time: '2017-02-13 15:38',
          useragent: 'chrome45,mac'
        },
        {
          key: 4,
          site: "shixi.189.cn",
          userId: 3,
          position: "/post/index",
          message: "type error!",
          stack: "Type Error",
          ds: '59',
          error_time: '2017-02-13 15:38',
          useragent: 'chrome45,mac'
        }
      ]
    });
  }
}
