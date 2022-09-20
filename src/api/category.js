import connection from "./db.js";
let exports = {
    searchByHeader: async () => {
        try {
            var db = connection.getConnection(async conn => conn);

            var result = await db.query("SELECT * FROM category");

            return result;
        } catch(e) {
            console.log(e);
        }
    }
}

export default exports;