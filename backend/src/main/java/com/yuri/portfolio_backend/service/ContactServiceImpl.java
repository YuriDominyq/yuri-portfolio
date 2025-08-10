package com.yuri.portfolio_backend.service;

import com.yuri.portfolio_backend.model.Contact;
import com.yuri.portfolio_backend.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class ContactServiceImpl implements ContactService {

    private static final String UPLOAD_DIR = "uploads/";

    @Autowired
    private ContactRepository contactRepository;

    @Override
    public Contact saveContact(String name, String email, String message, MultipartFile file) throws IOException{
        Contact contact = new Contact();

        contact.setName(name);
        contact.setEmail(email);
        contact.setMessage(message);

        if(file != null && !file.isEmpty()){
            File uploadDir = new File(UPLOAD_DIR);
            if(!uploadDir.exists()){
                uploadDir.mkdir();
            }

            String filePath = UPLOAD_DIR + file.getOriginalFilename();
            Path path = Paths.get(filePath);
            Files.write(path, file.getBytes());

            contact.setFilePath(filePath);
        }
        return contactRepository.save(contact);
    }
}