const http = require('http');

const employee = require("./employees");

const parseURLParams = (paramsString) => {
    const params = new URLSearchParams(paramsString);

    return Array.from(params.entries()).reduce((acc, [key, value]) => ({ ...acc, [key]: value}), {})
}

const server = http.createServer(async(req, res) => {

    const [path, paramsString] = req.url.split("?");

    if( path === "/api/employees") {
        const params = parseURLParams(paramsString);
    
        const { code, data} = await employee.getAll(params);

        res.writeHead(code, { "Content-Type": "application/json" });
        res.end(data);
    } else if(path.match(/\/api\/employees\/\w+/)) {
         const id = path.split("/")[3];

         const { code, data } = await employee.getById(id);

         res.writeHead(code, {"Content-Type" : "application/json"});
         res.end(data);
    } else {
        res.writeHead(404,{"Content-Type" : "application/json"} )
        res.end('No router found!')
    }
    
})

server.listen(8888);