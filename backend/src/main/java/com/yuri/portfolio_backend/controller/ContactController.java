package com.yuri.portfolio_backend.controller;

import com.yuri.portfolio_backend.model.Contact;
import com.yuri.portfolio_backend.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/contacts")
@CrossOrigin(origins = {"https://yuri-portfolio-delta.vercel.app", "http://localhost:3000"})
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping(consumes = {"multipart/form-data"})
    @CrossOrigin(origins = {"https://yuri-portfolio-delta.vercel.app", "http://localhost:3000"})
    public ResponseEntity<?> saveContact(
            @RequestParam("name") String name,
            @RequestParam("email") String email,
            @RequestParam("message") String message,
            @RequestParam(value = "file", required = false) MultipartFile file
    ) {
        try {
            System.out.println("Received contact: " + name + ", " + email);
            System.out.println("File received: " + (file != null ? file.getOriginalFilename() : "No file"));

            Contact savedContact = contactService.saveContact(name, email, message, file);
            return ResponseEntity.ok(savedContact);
        } catch (Exception e) {
            System.err.println("Error saving contact: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error saving contact: " + e.getMessage());
        }
    }

    @PostMapping(value = "/json", consumes = {"application/json"})
    @CrossOrigin(origins = {"https://yuri-portfolio-delta.vercel.app", "http://localhost:3000"})
    public ResponseEntity<?> saveContactJson(@RequestBody Contact contact) {
        try {
            Contact savedContact = contactService.saveContact(
                    contact.getName(),
                    contact.getEmail(),
                    contact.getMessage(),
                    null
            );
            return ResponseEntity.ok(savedContact);
        } catch (Exception e) {
            System.err.println("Error saving contact: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error saving contact: " + e.getMessage());
        }
    }

    @RequestMapping(method = RequestMethod.OPTIONS)
    public ResponseEntity<?> handlePreflight() {
        return ResponseEntity.ok().build();
    }

    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("Backend is working! CORS enabled.");
    }
}