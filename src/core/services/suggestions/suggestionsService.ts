import store from "../../../config/store.config";
import { setSuggestions } from "../../../context/suggestionsSlice/actions";
import { Suggestion } from "../../../types/SuggesionsResponse";
import { SuggesionsRequest } from "../../../types/SuggestionsRequest";
import { ApiClient } from "../../api/apiClient";
import uriObject from "../../uris/index.uri";

interface ISuggestionsApiClient {
    getSuggestions(details: SuggesionsRequest): Promise<string | undefined>
}

export class SuggestionsApiClient extends ApiClient implements ISuggestionsApiClient {

    async getSuggestions(details: SuggesionsRequest): Promise<string | undefined> {
        try {
            const response = await this.post<SuggesionsRequest, { data: string }>(`${this.apiBase}${uriObject.suggestionsUris.suggestions}`, details)
      
            return response?.data
        } catch (error) {
            console.error('ERR::LOGIN', error)
        }
    }

}

export class SuggestionsService {
    client: ISuggestionsApiClient

    constructor(client: ISuggestionsApiClient) {
        this.client = client
    }

    async getSuggestions(details: SuggesionsRequest): Promise<string | undefined> {
        const suggestions: string | undefined = await this.client.getSuggestions(details)
        if (suggestions !== undefined) {
            store.dispatch(setSuggestions(suggestions))
        }
        return suggestions
    }
}
