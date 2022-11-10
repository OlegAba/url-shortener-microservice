import { EndpointData, Method } from './components/endpoint/Endpoint.interface';

export const dateEndpointData: EndpointData = {
  name: 'whoami',
  description: 'Returns a JSON object with an IP address, preferred language, and user-agent of a provided request',
  methodsData: [
    {
      method: Method.GET,
      endpoint: '/api/whoami',
      params: [],
      codes: [
        {
          statusCode: 200,
          description: 'Successful operation',
          sampleRes: '{ \n  "ipaddress": "152.171.47.142",\n  "language": "en-US,en;q=0.5",\n  "software": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"\n}\n'
        }
      ]
    }
  ]
}