const https = require('https');
const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, 'public', 'images', 'gallery');

if (!fs.existsSync(galleryDir)) {
    fs.mkdirSync(galleryDir, { recursive: true });
}

// Some fixed public image URLs for a wedding theme
const imageUrls = [
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
    'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80',
    'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&q=80',
    'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80',
    'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80',
    'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800&q=80',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80'
];

async function downloadImages() {
    // Gallery images
    for (let i = 0; i < 9; i++) {
        const dest = path.join(galleryDir, `couple${i + 1}.jpg`);
        await downloadImage(imageUrls[i], dest);
    }
    
    // Couple story image
    await downloadImage('https://images.unsplash.com/photo-1529636798458-185202613d96?w=800&q=80', path.join(galleryDir, 'couple-story.jpg'));
    
    console.log('Images downloaded successfully');
}

function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

downloadImages().catch(console.error);
