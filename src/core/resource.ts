// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { AureusStainless } from '../client';

export abstract class APIResource {
  protected _client: AureusStainless;

  constructor(client: AureusStainless) {
    this._client = client;
  }
}
