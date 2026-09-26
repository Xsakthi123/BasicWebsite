package com.example.businesswebsite;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class ContactControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void showsHelpfulInformationAtTheApiHomePage() throws Exception {
        mockMvc.perform(get("/"))
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith(MediaType.TEXT_HTML))
                .andExpect(content().string(containsString("The website API is running.")));
    }

    @Test
    void explainsHowToUseTheContactEndpointInABrowser() throws Exception {
        mockMvc.perform(get("/api/contact"))
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith(MediaType.TEXT_HTML))
                .andExpect(content().string(containsString(
                        "Open the contact page to send a message."
                )));
    }

    @Test
    void acceptsAValidContactMessage() throws Exception {
        mockMvc.perform(post("/api/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                  "name": "Alex Example",
                                  "email": "alex@example.com",
                                  "subject": "Question",
                                  "message": "I would like to learn more."
                                }
                                """))
                .andExpect(status().isAccepted())
                .andExpect(jsonPath("$.message").value(
                        "Thanks, Alex Example! Your message has been received."
                ));
    }

    @Test
    void rejectsAContactMessageWithAnInvalidEmail() throws Exception {
        mockMvc.perform(post("/api/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                  "name": "Alex Example",
                                  "email": "not-an-email",
                                  "subject": "Question",
                                  "message": "I would like to learn more."
                                }
                                """))
                .andExpect(status().isBadRequest());
    }
}
