package com.shpark.calc.backend.controller;

import com.shpark.calc.backend.dto.PostDTO;
import com.shpark.calc.backend.service.PostService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/post")
@Log4j2
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @PostMapping("/register")
    public int register(@RequestBody PostDTO postDTO) {
        int pno = postService.register(postDTO);
        log.info(pno);
        return pno;
    }

    @GetMapping("/{id}")
    public PostDTO get(@PathVariable String id) {
        log.info("----- POST GET METHOD START -----");
        PostDTO postDTO = postService.get(id);

        return postDTO;
    }

    @GetMapping("/")
    public List<PostDTO> getAll(@RequestParam String groupName) {
        log.info("----- GET METHOD START -----");
        log.info(groupName);
        List<PostDTO> postDTOList = postService.getAll(groupName);
        return postDTOList;
    }

    @DeleteMapping("/{id}")
    public Map<String, String> remove(@PathVariable String id) {
        postService.remove(id);

        return Map.of("POST REGISTER", "SUCCESS");
    }

}
