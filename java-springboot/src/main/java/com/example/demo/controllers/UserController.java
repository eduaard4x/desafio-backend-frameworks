package com.example.demo.controllers;

import com.example.demo.models.User;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    @GetMapping("/users")
    public User getUser() {
        return new User();
    }
}
