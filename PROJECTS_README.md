# Projects Management

This portfolio uses a JSON file to manage all project data, making it easy to add, edit, or remove projects without touching the code.

## File Structure

- `data/projects.json` - Contains all project data
- `lib/projects.ts` - Utility functions to read and filter projects
- `app/projects/page.tsx` - Projects page that displays the data
- `app/page.tsx` - Home page that shows featured projects

## How to Edit Projects

### 1. Edit `data/projects.json`

Each project has the following structure:

```json
{
  "id": 1,
  "name": "Project Name",
  "tag": "Web App",
  "description": "Project description...",
  "languages": ["React", "TypeScript", "CSS"],
  "url": "https://github.com/username/project",
  "featured": true
}
```

### 2. Project Properties

- **id**: Unique identifier (number)
- **name**: Project name (string)
- **tag**: Category (e.g., "Web App", "API", "CLI", "Mobile App")
- **description**: Detailed project description
- **languages**: Array of technologies used
- **url**: Link to the project (GitHub, live demo, etc.)
- **featured**: Boolean - if true, shows on home page

### 3. Adding a New Project

1. Open `data/projects.json`
2. Add a new object to the `projects` array
3. Use the next available ID
4. Set `featured: true` if you want it on the home page

Example:

```json
{
  "id": 17,
  "name": "My New Project",
  "tag": "Web App",
  "description": "A new project I built...",
  "languages": ["React", "Node.js", "MongoDB"],
  "url": "https://github.com/agucchristopher/my-new-project",
  "featured": false
}
```

Mobile App Example:

```json
{
  "id": 18,
  "name": "My Mobile App",
  "tag": "Mobile App",
  "description": "A cross-platform mobile application...",
  "languages": ["React Native", "TypeScript", "Firebase"],
  "url": "https://github.com/agucchristopher/my-mobile-app",
  "featured": true
}
```

### 4. Editing Existing Projects

Simply modify the values in `data/projects.json`:

- Change the name, description, or URL
- Update the technologies used
- Change the tag/category
- Toggle featured status

### 5. Removing Projects

Delete the project object from the `projects` array in `data/projects.json`.

## Available Tags

Current tags used:

- Web App
- API
- CLI
- Mobile App
- Extension
- Bot
- SDK

You can add new tags as needed.

## Utility Functions

The `lib/projects.ts` file provides these functions:

- `getAllProjects()` - Get all projects
- `getFeaturedProjects()` - Get only featured projects
- `getProjectsByTag(tag)` - Get projects by category
- `getUniqueTags()` - Get all available tags
- `getProjectById(id)` - Get a specific project
- `searchProjects(query)` - Search projects by name/description

## Benefits

- **Easy Management**: No need to edit code files
- **Version Control**: Track changes to your projects
- **Flexible**: Add/remove projects without touching components
- **Consistent**: All projects follow the same structure
- **Searchable**: Built-in search functionality
- **Filterable**: Filter by project type

## Tips

1. Keep descriptions concise but informative
2. Use consistent tag names
3. Include relevant technologies in the languages array
4. Set `featured: true` for your best projects
5. Use descriptive project names
6. Keep URLs up to date
