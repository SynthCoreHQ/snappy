class NotFound extends Error {
    constructor(message) {
        super(message);

        this.name = 'NotFound';
        this.code = 'ENOTFOUND';
        this.code = 404;
    }
}

export { NotFound };
