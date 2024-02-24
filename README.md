# 🎥 Vidext Video Player

- Clone Repo
- Install dependencies ``` npm install ```
- Execute ```npm run dev```
- If want to see ui database execute ```npx drizzle-kit studio``` and open https://local.drizzle.studio
- First time the project is started, it may be slower than usual, this is because the database is being created.
- Test it!

## 📝 Requirements

### Functional Requirements

1. Video player page. ✔️
2. There must be an API endpoint that allows the app to retrieve video data. ✔️
3. After a video is played, an API call must store the play count for that video. ✔️
4. Utilize Next.js' built-in API routes to handle server-side operations. ✔️
5. Use TailwindCSS for styling the application with the help of Shadcn for UI interfaces consistent with design requirements. ✔️
6. Implement tRPC to facilitate type-safe API calls between the client and server. ✔️

### Technical Requirements

- Create a Next.js application from scratch. ✔️
- Set up TailwindCSS with Next.js and integrate Shadcn components where appropriate. ✔️
- Design the app with a responsive layout suitable for both desktop and mobile viewports. ✔️
- Construct tRPC API routes within the Next.js app which exposes at least two endpoints:
    - One endpoint to retrieve video data (`getVideos`). ✔️
    - Another endpoint to increment and store the video play count (`incrementPlayCount`). ✔️
- Use Next.js app routing to navigate between pages and components. ✔️
- Implement error handling and loading states for API calls. ✔️
- Write simple documentation in a [README.md](http://readme.md/) file, explaining how to set up and run the application locally. ✔️

### Bonus Points

- Implement additional features such as video descriptions, or a "like" functionality. ✔️
- Add authentication to ensure that only authorized users can increment the play count.
- Fully customizable media player controls. [https://github.com/muxinc/media-chrome] ✔️
- Good design. ✔️

#### Extra points not included

- Use drizzleORM ✔️
