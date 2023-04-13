
# Web Fundamentals

Assignment Session 01





## Question 1

 What is a protocol stack, and how is it used in web development?
## Answer 1

A protocol stack, also known as a network stack or networking protocol suite, is a set of protocols that work together to facilitate communication between devices over a network.
In web development, a protocol stack is used to establish and maintain communication between web clients (such as web browsers) and web servers.

The most common protocol stack used in web development is the TCP/IP protocol stack. This stack consists of two main protocols: the Transmission Control Protocol (TCP) and the Internet Protocol (IP). TCP is responsible for breaking up data into packets, establishing connections between devices, and ensuring reliable delivery of data. IP, on the other hand, is responsible for routing packets between devices on the internet.

In addition to TCP/IP, web development also relies on a variety of other protocols in the protocol stack. For example, the Hypertext Transfer Protocol (HTTP) is used to exchange information between web clients and web servers, while the Domain Name System (DNS) is used to translate human-readable domain names (such as google.com) into IP addresses that can be used by the TCP/IP protocol stack.

Together, these protocols form a complete protocol stack that enables web clients and servers to communicate with each other reliably and efficiently.
## Resources

1)https://www.techopedia.com/definition/9005/protocol-stack
2)https://developer.mozilla.org/en-US/docs/Web/HTTP

## Question 1

 What is a protocol stack, and how is it used in web development?
## Question 2

What are the different types of web servers, and how do they differ in terms of functionality and performance?
## Answer 2

There are four leading web servers − Apache, IIS, lighttpd and Jigsaw.

1) Apache HTTP Server : 

This is the most popular web server in the world developed by the Apache Software Foundation. Apache web server is an open source software and can be installed on almost all operating systems including Linux, Unix, Windows, FreeBSD, Mac OS X and more. About 60% of the web server machines run the Apache Web Server.

2) Internet Information Services (IIS) :

The Internet Information Server (IIS) is a high performance Web Server from Microsoft. This web server runs on Windows NT/2000 and 2003 platforms ( and may be on upcoming new Windows version also). IIS comes bundled with Windows NT/2000 and 2003; Because IIS is tightly integrated with the operating system so it is relatively easy to administer it.

3) lighttpd :

The lighttpd, pronounced lighty is also a free web server that is distributed with the FreeBSD operating system. This open source web server is fast, secure and consumes much less CPU power. Lighttpd can also run on Windows, Mac OS X, Linux and Solaris operating systems

4) Jigsaw Server :

Jigsaw (W3C's Server) comes from the World Wide Web Consortium. It is open source and free and can run on various platforms like Linux, Unix, Windows, Mac OS X Free BSD etc. Jigsaw has been written in Java and can run CGI scripts and PHP programs.

FURTHER ARE SOME ADDTIONAL WEB SERVERS.

5) Node.js :

This is a web server that is based on JavaScript and is commonly used for building real-time web applications. Node.js is known for its ability to handle large volumes of connections and for its scalability.

6) Nginx :

This is a high-performance web server that is popular for its ability to handle large volumes of traffic. Nginx is often used for serving static content and as a reverse proxy.

Each web server has its own set of strengths and weaknesses in terms of functionality and performance. For example, Apache is known for its flexibility and stability, while Nginx is known for its high performance and ability to handle large volumes of traffic. Microsoft IIS is known for its ease of use and tight integration with other Microsoft technologies, while Lighttpd is designed for high-performance environments. Node.js, on the other hand, is often used for building real-time web applications and handling large volumes of connections. Ultimately, the choice of web server depends on the specific requirements of the website or application being served, as well as the preferences and expertise of the web developer or administrator.

## Resources 2

1) https://www.tutorialspoint.com/web_developers_guide/web_server_types.htm
## Question 3

What is web hosting, and what are the different types of hosting services available for websites?
## Answer 3

Web Hosting is a service that helps web browser clients to easily access electronic information on the Internet by hosting/posting web-server programs (websites or web pages) on a computer system.

A web server, often known as a web host, is a computer system that hosts websites. Internet users need to use the website URL or domain name in their browser to access a website. After that, the user's machine will connect to the web server, and the web pages will be provided to them through the browser.

The following are the types of Web hosting services −

Free Hosting

Virtual/Shared Hosting

Dedicated Hosting

Co-location Hosting

Free Hosting

This is a non-commercial, free web hosting service. This sort of hosting is offered from several well-known websites that provide free hosting for a limited number of web pages.

Virtual/Shared Hosting

It is a hosting web service in which several websites are hosted on a single web server linked to the Internet. With a hosting package from the wed b hosting firm, you may show yourself to your web audience as an autonomous personality.

Dedicated Hosting

This type of hosting is suited for huge websites with high traffic. The company aspiring to go online rents an entire web server from a hosting company. This is suitable for companies hosting big websites, maintaining other sites, managing a big online mall, etc.

Colocation Hosting

Colocation hosting allows you to run your web server on a service provider's facilities. It's identical to dedicated hosting, except that the user-business now provides the server, and the hosting provider takes care of the physical needs.


## Resources 3

https://www.tutorialspoint.com/types-of-web-hosting#:~:text=Web%20Hosting%20is%20a%20service,computer%20system%20that%20hosts%20websites.
## Question 4

What is scaling, and why is it important for web applications? How does scaling differ for vertical and horizontal scaling?
## Answer 4

Scaling refers to the process of increasing the capacity or resources of a web application to handle larger amounts of traffic, data, or user activity. The goal of scaling is to ensure that a web application can continue to operate efficiently and effectively as it grows in size and complexity.

Scaling is important for web applications for several reasons:

1)Handle increased traffic: As a web application gains more users and traffic, it can become slow or unresponsive if it is not properly scaled to handle the increased load. Scaling ensures that the application can continue to operate smoothly even during peak periods of activity.

2)Meet user demand: If a web application is unable to handle increased user demand, it can lead to frustration and dissatisfaction among users. Proper scaling ensures that the application can meet user demand and provide a positive user experience.

3)Improve performance: Scaling can improve the performance of a web application by distributing the load across multiple servers, reducing the load on individual servers, and improving response times.

4)Ensure reliability: By scaling a web application, redundancy and failover mechanisms can be put in place to ensure that the application remains reliable and available even in the event of hardware or software failures.

Scaling horizontally and scaling vertically are similar in that they both involve adding computing resources to your infrastructure. There are distinct differences between the two in terms of implementation and performance.

Horizontal scaling means scaling by adding more machines to your pool of resources (also described as “scaling out”), whereas vertical scaling refers to scaling by adding more power (e.g. CPU, RAM) to an existing machine (also described as “scaling up”).

One of the fundamental differences between the two is that horizontal scaling requires breaking a sequential piece of logic into smaller pieces so that they can be executed in parallel across multiple machines. In many respects, vertical scaling is easier because the logic really doesn’t need to change. Rather, you’re just running the same code on higher-spec machines. However, there are many other factors to consider when determining the appropriate approach.





## Resources 4

https://www.section.io/blog/scaling-horizontally-vs-vertically/

## Question 5

What is SEO (Search Engine Optimization), and how can web developers optimize their websites for better search engine rankings?
## Answer 5

Search engine optimization (SEO) is the art and science of getting pages to rank higher in search engines such as Google. Because search is one of the main ways in which people discover content online, ranking higher in search engines can lead to an increase in traffic to a website.

In Google and other search engines, the results page often features paid ads at the top of the page, followed by the regular results or what search marketers call the "organic search results". Traffic that comes via SEO is often referred to as "organic search traffic" to differentiate it from traffic that comes through paid search. Paid search is often referred to as search engine marketing (SEM) or pay-per-click (PPC).

The benefits of SEO:

Search engine optimization is a key part of online marketing because search is one of the primary ways that users navigate the web. 

Search results are presented in an ordered list, and the higher up on that list a site can get, the more traffic the site will tend to receive. For example, for a typical search query, the number one result will receive 40-60% of the total traffic for that query, with the number two and three results receiving significantly less traffic. Only 2-3% of searchers click beyond the first page of search results. Thus, even a small improvement in search engine rankings can result in a website receiving more traffic and potentially business.

Because of this, many businesses and website owners will try to manipulate the search results so that their site shows up higher on the search results page (SERP) than their competitors. This is where SEO comes in.

Search engine optimization techniques :

1) Keyword research - Keyword research is often the starting point for SEO and involves looking at what keywords a site is already ranking for, what keywords competitors rank for, and what other keywords potential customers are searching for. Identifying the terms that searchers use in Google search and other search engines provide direction on what existing content can be optimized and what new content can be created.

2) Content marketing - Once potential keywords are identified, content marketing comes into play. This can be updating existing content or creating brand new pieces of content. Because Google and other search engines place a premium on high-quality content, it's important to research what content is already out there and create a compelling piece of content that provides a positive user experience and has a chance of ranking higher in the search engine results. Good content also has a greater chance of being shared on social media and attracting links.

3) Link building - Because links from external websites (called "backlinks" in SEO parlance) are one of the core ranking factors in Google and other major search engines, obtaining high-quality backlinks is one of the main levers that SEO has. This can involve promoting good content, reaching out to other websites and building relationships with webmasters, submitting websites to relevant web directories, and getting press to attract links from other websites.

4) On-page optimization - In addition to off-page factors such as links, improving the actual structure of the page can have tremendous benefits for SEO, and is a factor that is entirely in the control of the webmaster. Common on-page optimization techniques include optimizing the URL of the page to incorporate keywords, updating the title tag of the page to use relevant search terms, and using the alt attribute to describe images. Updating a page's meta tags (such as the meta description tag) can also be beneficial-- these tags don't have a direct impact on search rankings, but can increase click-through rate from the SERPs.

5) Site architecture optimization - External links are not the only thing that matters for SEO, internal links (the links within one's own website) play a large role in SEO as well. Thus a search engine optimizer can improve a site's SEO by making sure key pages are being linked to and that relevant anchor text is being used in those links to help improve a page's relevance for specific terms. Creating an XML sitemap can also be a good way for larger pages to help search engines discover and crawl all of the site's pages.

6) Semantic markup - Another SEO strategy that SEO experts utilize is optimizing a website's semantic markup. Semantic markup (such as Schema.org) is used to describe the meaning behind the content on a page, such as helping to identify who the author of a piece of content is or the topic and type of content on a page. Using semantic markup can help with getting rich snippets displayed in the search results page, such as extra text, review stars and even images. Rich snippets in the SERPs doesn't have an impact on search rankings, but can improve CTR from search, resulting in an increase in organic traffic.

Overall, SEO is an ongoing process that requires continuous effort and monitoring. By implementing these strategies, web developers can improve their website's search engine rankings, increase organic traffic, and ultimately drive more conversions and revenue.
## Resources 5

1) https://www.optimizely.com/optimization-glossary/search-engine-optimization/#:~:text=Search%20engine%20optimization%20(SEO)%20is,in%20traffic%20to%20a%20website.
