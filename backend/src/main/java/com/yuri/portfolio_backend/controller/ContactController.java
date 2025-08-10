package com.yuri.portfolio_backend.controller;

import com.yuri.portfolio_backend.model.Contact;
import com.yuri.portfolio_backend.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@CrossOrigin(origins = {"http://localhost:3001", "https://yuri-portfolio-delta.vercel.app"})
@RestController
@RequestMapping("/api/contacts")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping(consumes = {"multipart/form-data"})
    public Contact saveContact(
            @RequestParam("name") String name,
            @RequestParam("email") String email,
            @RequestParam("message") String message,
            @RequestParam(value = "file", required = false) MultipartFile file
    ) throws IOException {
        return contactService.saveContact(name, email, message, file);
    }
}
