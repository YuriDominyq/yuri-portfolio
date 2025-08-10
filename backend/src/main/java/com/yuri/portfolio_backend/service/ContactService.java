package com.yuri.portfolio_backend.service;

import com.yuri.portfolio_backend.model.Contact;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface ContactService {
    Contact saveContact(String name, String email, String message, MultipartFile file) throws IOException;
}