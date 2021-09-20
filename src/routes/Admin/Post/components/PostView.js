import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NavLink } from 'react-router-dom';
import { category } from 'components/common'
import swal from 'sweetalert2';
import {
  doPost,
  getBlogByID
} from '../modules/actions'
const PostView = ({ post, doPost, getBlogByID, editPost }) => {
  const [postTitle, setpostTitle] = useState('')
  const [postData, setPostData] = useState('')
  const [postCategory, setpostCategory] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [isEdit, setEdit] = useState(false)
  const setFormValue = (data) => {
    setpostTitle(data.title);
    setPostData(data.content);
    setpostCategory(data.category);
    setpostCategory(data.thumbnail);
  };
  useEffect(() => {
    if (new URLSearchParams(location.search).get("id")) {
      setEdit(true)
      getBlogByID(new URLSearchParams(location.search).get("id"), setFormValue)
    }
  }, [new URLSearchParams(location.search).get("id")]);
  const onCreatePost = () => {
    doPost(postTitle, postData, postCategory, thumbnail)
  }
  const onEditPost = () => {
    editPost(new URLSearchParams(location.search).get("id"), postTitle, postData, postCategory, thumbnail)
  }
  const handleFileRead = async (event) => {
    const file = event.target.files[0]
    const fileSize = file.size / 1024 / 1024;
    if (fileSize > 2) {
      swal({
        title: 'Error',
        html: '<p class="pop-content">Image size cannot bigger than 2MB.</p>',
        animation: false,
        showCloseButton: true,
        confirmButtonText: 'Đóng',
        customClass: 'custom-modal animated zoomIn'
      })
      return
    }
    const base64 = await convertBase64(file)
    setThumbnail(base64)
  }
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }
  ClassicEditor
    .create(document.querySelector('#editor'), {
      toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
      heading: {
        options: [
          { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
          { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
          { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
        ]
      },
    })
    .catch(error => {
    });
  return (
    <>
      <div className="tvf-container">
        <div className="section-admin">
          <h4 className="adm-title">{isEdit ? 'Edit Post' : 'Create Post'}</h4>
          <div className="signin__form--control">
            <label htmlFor="postTitle">Title</label>
            <input type="text" className="sign__control" placeholder="post title" value={postTitle}
              onChange={e => setpostTitle(e.target.value)} id="postTitle" />
          </div>
          <div className="signin__form--control">
            <label htmlFor="categoryLbl">Category</label>
            <select className="form-control" onChange={e => setpostCategory(e.target.value)} value={postCategory} id="categoryLbl">
              <option selected>Chose title category</option>
              {
                category.length > 0 &&
                category.map((cat, idx) => (
                  <option key={idx} value={cat.id}>{cat.name}</option>
                ))
              }
            </select>
          </div>
          <div className="signin__form--control">
            <label htmlFor="postTitle">Thumbnail</label>
            {
              thumbnail &&
              <img src={thumbnail} alt="" />
            }
            <input
              id="originalFileName"
              type="file"
              inputProps={{ accept: 'image/*, .xlsx, .xls, .csv, .pdf, .pptx, .pptm, .ppt' }}
              required
              label="Document"
              name="originalFileName"
              onChange={e => handleFileRead(e)}
              size="small"
              variant="standard"
            />
          </div>
          <br />
          <br />
          <br />
          <div>
            <CKEditor
              editor={ClassicEditor}
              data={postData}
              onReady={editor => {
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setPostData(data);
              }}
              onBlur={(event, editor) => {
              }}
              onFocus={(event, editor) => {
              }}
            />
          </div>
          <div className="text-right">
            <NavLink className="btn btn--back" to={'/admin'}>Back</NavLink>
            {
              isEdit ? (
                <button type="submit" className="btn btn--tvf" onClick={() => onEditPost()}>Save</button>
              ) : (
                <button type="submit" className="btn btn--tvf" onClick={() => onCreatePost()}>Create</button>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default PostView;
