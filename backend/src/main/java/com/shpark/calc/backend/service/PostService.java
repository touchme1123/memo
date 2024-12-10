package com.shpark.calc.backend.service;

import com.shpark.calc.backend.dto.PostDTO;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface PostService {


    PostDTO get(String id);

    List<PostDTO> getAll(String groupName);

    int register(PostDTO postDTO);

    void modify(PostDTO postDTO);

    void remove(String id);

}
