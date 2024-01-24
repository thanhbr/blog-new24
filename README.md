Detailed analysis of source code organization

============================================================================

src/
|-- components/             # Các component tái sử dụng
|   |-- Auth/               # Component liên quan đến đăng nhập và đăng ký
|   |   |-- LoginForm/
|   |   |   |-- LoginForm.js
|   |   |   |-- LoginForm.css
|   |   |-- RegistrationForm/
|   |   |   |-- RegistrationForm.js
|   |   |   |-- RegistrationForm.css
|   |-- BlogPost/           # Component cho hiển thị chi tiết bài viết blog
|   |   |-- BlogPost.js
|   |   |-- BlogPost.css
|   |-- Comment/            # Component liên quan đến quản lý bình luận
|   |   |-- CommentForm/
|   |   |   |-- CommentForm.js
|   |   |   |-- CommentForm.css
|   |   |-- CommentList/
|   |   |   |-- CommentList.js
|   |   |   |-- CommentList.css
|   |-- Header/
|   |   |-- Header.js
|   |   |-- Header.css
|   |-- Footer/
|   |   |-- Footer.js
|   |   |-- Footer.css
|-- containers/             # Các container components (kết hợp components, quản lý trạng thái)
|   |-- Home/
|   |   |-- Home.js
|   |   |-- Home.css
|   |-- Blog/               # Trang quản lý và hiển thị bài viết blog
|   |   |-- BlogList/
|   |   |   |-- BlogList.js
|   |   |   |-- BlogList.css
|   |   |-- BlogDetail/
|   |   |   |-- BlogDetail.js
|   |   |   |-- BlogDetail.css
|   |-- UserDashboard/      # Trang dashboard cho người dùng
|   |   |-- UserProfile/
|   |   |   |-- UserProfile.js
|   |   |   |-- UserProfile.css
|   |   |-- UserSettings/
|   |   |   |-- UserSettings.js
|   |   |   |-- UserSettings.css
|-- redux/                  # Redux store, actions, reducers
|   |-- actions/
|   |   |-- blogActions.js
|   |   |-- userActions.js
|   |-- reducers/
|   |   |-- blogReducer.js
|   |   |-- userReducer.js
|   |-- store.js
|-- styles/                 # Các file CSS hoặc thư viện CSS-in-JS
|   |-- main.css
|-- utils/                  # Các hàm tiện ích, helper functions
|   |-- api.js
|   |-- helpers.js
|-- App.js                  # Component chính của ứng dụng
|-- index.js                # Nơi khởi tạo ứng dụng và render component chính

============================================================================
