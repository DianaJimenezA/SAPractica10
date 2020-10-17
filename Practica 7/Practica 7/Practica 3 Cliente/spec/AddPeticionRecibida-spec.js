var app=require("../index.js");
describe("Responsive",function(){
it("The function give a message",function() {
var value=app.AddPeticionRecibida('el restaurante respondio');
expect(value).toBe('respondio correctamente');
});
});
