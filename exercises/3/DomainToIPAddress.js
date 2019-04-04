


console.log('\nIP lookup using dns core module, resolve4 ')
function ipLookup1(domain) {
    const dns = require('dns');
    dns.resolve4(domain, (err, address) => {
        if (err) {
            throw err;
        }else{
            console.log('ipLookup1: ', address);
        }
  });
}
ipLookup1('www.mum.edu');

console.log('\nIP lookup using dns core module, resolve4 and Promise ')

function ipLookup2(domain) {
    const  {promisify} = require('util');
    const dns = require('dns');
    const dnsLookup = promisify(dns.resolve4);
    dnsLookup(domain)
        .then (address => console.log('ipLookup2: ', address))
        .catch(error => console.log(error));
}
ipLookup2 ('www.mum.edu')


console.log('\nIP lookup using dns core module, resolve4 and Promise Async/Await')
function ipLookup3(domain) {
    const  {promisify} = require('util');
    const dns = require('dns');
    const dnsLookup = promisify(dns.resolve4);

    async function asyncLookup(){
        try{
            const address = await dnsLookup(domain);
            console.log('ipLookup3: ', address)

        }catch(error){
            console.log('Error:', error);
        }
    }
    asyncLookup();
}
ipLookup3 ('www.mum.edu')
