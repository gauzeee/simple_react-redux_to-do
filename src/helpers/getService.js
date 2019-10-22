 class GetService {
    constructor(props) {
        this._apiBase = "http://localhost:3001";
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

    postItem = async item => {
            await fetch(`${this._apiBase}/items`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            })
    }

    patchItem = async item => {
        await fetch(`${this._apiBase}/items/${item.id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
    }

    removeItem = async id => {
        await fetch(`${this._apiBase}/items/${id}`, {
            method: 'DELETE'
        })
    }

}

 export default new GetService();