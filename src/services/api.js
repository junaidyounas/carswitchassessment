import axiosInstance from "./axios";


const getDataByName = (name) => {
          return new Promise((resolve, reject) => {
                    axiosInstance.get(`/?name=${name}`)
                              .then(res => {
                                        resolve(res.data);
                              }).catch(err => {
                                        reject(err);
                              })
          });
};



export const api = {
          getDataByName,
};