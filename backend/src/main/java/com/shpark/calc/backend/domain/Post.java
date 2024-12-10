package com.shpark.calc.backend.domain;

import com.shpark.calc.backend.dto.PostDTO;
import jakarta.persistence.*;
import lombok.*;
import lombok.extern.log4j.Log4j2;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Log4j2
@Entity
@Table(name = "tbl_post")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int pno;

    @NonNull
    private String title;

    private String content,uuid,groupName;

    private boolean delFlag;

    private LocalDateTime localDateTime;

    @ElementCollection
    @OrderColumn
    private List<PostImage> postImageList;

}
