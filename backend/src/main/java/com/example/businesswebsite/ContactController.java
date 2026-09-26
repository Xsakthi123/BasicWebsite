package com.example.businesswebsite;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "${app.frontend-origin}")
public class ContactController {

    @PostMapping
    public ResponseEntity<ContactResponse> submitContact(
            @Valid @RequestBody ContactRequest request
    ) {
        // The starter acknowledges valid messages; connect storage or email here later.
        ContactResponse response = new ContactResponse(
                "Thanks, " + request.name() + "! Your message has been received."
        );
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(response);
    }
}
