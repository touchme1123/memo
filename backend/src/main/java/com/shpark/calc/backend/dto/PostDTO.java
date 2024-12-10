package com.shpark.calc.backend.dto;


import com.shpark.calc.backend.domain.PostImage;

import lombok.*;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Log4j2
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PostDTO {

    //POST ENTITY 필드값 가져오기
    private int pno;
    private String title, content,uuid,groupName;
    private boolean delFlag;
    private LocalDateTime localDateTime;
    private List<PostImage> postImageList;

    @Builder.Default
    private List<MultipartFile> files = new ArrayList<>();

    @Builder.Default
    private List<String> uploadFileNames = new ArrayList<>();

}
