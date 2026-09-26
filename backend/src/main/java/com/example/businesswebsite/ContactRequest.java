package com.example.businesswebsite;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

// These constraints protect the API even when a request skips browser-side checks.
public record ContactRequest(
        @NotBlank @Size(max = 80) String name,
        @NotBlank @Email @Size(max = 254) String email,
        @NotBlank @Size(max = 120) String subject,
        @NotBlank @Size(max = 2000) String message
) {
}
