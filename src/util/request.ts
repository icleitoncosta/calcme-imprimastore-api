/*!
 * Copyright 2023 Saturno Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import axios from 'axios';

import { config } from '../config';

const request = axios.create({
  baseURL: config.baseURL,
  timeout: 3000,
  headers: { 'x-access-token': config.token as string },
});

request.defaults.headers.common['Authorization'] = `${config.token}`;

export { request };

export function checkLoginExpired(error: any) {
  if (error?.status == 401 || error?.response?.status == 401) {
    console.log('Usuário não conectado... tentando reconecção...');
  }
}