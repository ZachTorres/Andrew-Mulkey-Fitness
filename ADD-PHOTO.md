# Adding Andrew's Profile Photo

## Quick Instructions

To add Andrew Mulkey's actual profile photo to the website:

### Step 1: Get the Photo
1. Go to Andrew's Instagram: [@andrewmulkeycoach](https://www.instagram.com/andrewmulkeycoach/)
2. Right-click on his profile picture
3. Select "Open image in new tab" or "Save image as"
4. Download the image

**OR**

1. Go to Andrew's LinkedIn: [Andrew Mulkey](https://www.linkedin.com/in/andrew-mulkey-aa06b42b0/)
2. Download his profile photo

### Step 2: Prepare the Image
- **Recommended size**: 800x800 pixels or larger
- **Format**: JPG or PNG
- **Name the file**: `andrew-profile.jpg`

### Step 3: Add to Website
1. Save the image to: `/public/images/andrew-profile.jpg`
2. That's it! The website is already configured to use this image

### Step 4: Test Locally (Optional)
```bash
npm run dev
```
Open http://localhost:3000 and check the "About Andrew" section

### Step 5: Deploy
Once you've added the photo:
```bash
git add public/images/andrew-profile.jpg
git commit -m "Add Andrew Mulkey profile photo"
git push
```

The photo will automatically appear on Vercel after deployment.

## Where the Photo Appears
- **About Section**: Large square photo with "5+ Years Experience" badge overlay
- Alt text: "Andrew Mulkey - Personal Trainer"
- Optimized by Next.js Image component for fast loading

## Fallback
If the photo hasn't been added yet, visitors will see a placeholder with:
- UGA red and black gradient background
- Dumbbell icon
- "Andrew Mulkey" text

## Tips for Best Results
- Use a **professional headshot** or **action shot** of Andrew training
- Ensure good lighting and clear facial features
- Square aspect ratio works best (1:1)
- High resolution (at least 800x800px) for retina displays
