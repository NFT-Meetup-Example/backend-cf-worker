addEventListener("fetch", (event) => {
  event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});

/**
 * 
 * @param {Request} request
 * @returns {Promise<Response>}
 */
async function handleRequest(request) {
  const  pathname  = request.url.replace('https://', '').split('/');
  return new Response(JSON.stringify({ 
      "name": "NFT Meetup #"+pathname[pathname.length - 1],
      "description": "1,000 unique collectible images",
      "external_url": "http://test.app/",
      "image": "http://test.app/"+pathname[pathname.length - 1]+".jpg",
      "attributes": []
      }
    ), {
      headers: { "Content-Type": "application/json" },
    });

}