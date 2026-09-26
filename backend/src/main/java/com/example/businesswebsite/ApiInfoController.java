package com.example.businesswebsite;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiInfoController {

    @GetMapping(value = "/", produces = MediaType.TEXT_HTML_VALUE)
    public String home() {
        return page(
                "Brightside Studio API",
                "<h1>The website API is running.</h1>"
                        + "<p>Open the Brightside Studio website to browse the pages "
                        + "and send a message.</p>"
                        + "<a href=\"http://localhost:5173/\">Open the website</a>"
        );
    }

    @GetMapping(value = "/api/contact", produces = MediaType.TEXT_HTML_VALUE)
    public String contactHelp() {
        return page(
                "Contact form API",
                "<h1>The contact form API is ready.</h1>"
                        + "<p>This address accepts contact form submissions from the "
                        + "website. Open the contact page to send a message.</p>"
                        + "<a href=\"http://localhost:5173/contact\">Open the contact page</a>"
        );
    }

    private String page(String title, String content) {
        return """
                <!doctype html>
                <html lang="en">
                <head>
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                  <title>%s</title>
                  <style>
                    body { font: 16px/1.6 system-ui, sans-serif; color: #183b39;
                           max-width: 620px; margin: 12vh auto; padding: 0 24px; }
                    a { display: inline-block; margin-top: 12px; padding: 10px 16px;
                        border-radius: 6px; background: #17675e; color: white;
                        text-decoration: none; }
                  </style>
                </head>
                <body>%s</body>
                </html>
                """.formatted(title, content);
    }
}
