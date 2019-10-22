export default class GetService {
    constructor(props) {
        this._apiBase = "http://localhost:3000";
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}/${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json().then(res => {
            return res;
        });
    }

    getAllItems = async item_type => {
        const something = await this.getResource(item_type);
        console.log(something);
        return something;
    };

    postItems = async items => {
        let stingy = '';
            items.forEach(item => {
                stingy = stingy + `{"text": "${item.text}", "id": "${item.id}", "complete": "${item.complete}"}` + ',';
            })
         await fetch(`${this._apiBase}/items/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(stingy)
        })
    }

}