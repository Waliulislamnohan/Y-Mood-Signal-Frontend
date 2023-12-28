export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end(); // Method Not Allowed
    }

    try {
        const body = JSON.stringify(req.body); // Parse the request body as JSON
        const response = await fetch('http://localhost:5000/get_comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error('Error fetching video data:', error);
        // Return default data if there's an error or no response
        res.status(200).json({
			"dislikes": null,
			"likes": "52418",
			"negative_comments_count": 19,
			"total_comments": "2188",
			"total_comments_count": 19,
			"views": "1137015"
        });
    }
}
