"use client"
import { Typography, Box, Card, CardContent, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import NavBar from "@/components/NavBar";
import PixelDisplay from "@/components/PixelDisplay";
import EditIcon from '@mui/icons-material/Edit';
import PatternGenerator from "@/components/PatternGenerator";
import Button from "@mui/material/Button";
import EditablePatternView from "@/components/EditablePatternView";


export default function PatternPage({params}) {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [patternConfig, setPatternConfig] = useState({});
    const [editView, setEditView] = useState(false);

    const onCancel = () => {
      setEditView(false);
    }
    const clickEditButton = () => {
      console.log("Clicked!");
      setEditView(true);
    }

        useEffect(() => {
         const fetchPost = async () => {
          try {
            const apiBaseUrl =
                process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

            const res = await fetch(`${apiBaseUrl}/patterns/${id}`);
            if (!res.ok) {
                throw new Error(`Failed to fetch post with ID: ${id}`);
            }

            const post = await res.json();
            setPost(post);
          } catch (err) {
            console.error("Failed to fetch post", err);
         }
    };

    fetchPost();
}, [id]);

    if (!post) return <Typography>Loading...</Typography>

  return (
    <Box sx={{height:'100vh'}}>
      <NavBar />
      <Box sx={{ backgroundColor: "#fafafa", py: 6, display: "flex", flexDirection: "row",
        justifyContent: "center", alignItems: "flex-start", gap: 4, flexWrap: "wrap", }} > 
        
        {!editView ? (
          <Card sx={{ flex: 1, minWidth: 350, maxWidth: 550, boxShadow: 3, borderRadius: 3, backgroundColor: "#fff" }} >
          <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", p: { xs: 2, md: 3 }, }} >
            <PixelDisplay patternInfo={post.pattern_info} displayHeight={250} displayWidth={250} />

            <Box sx={{display:'flex'}}>
              <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "primary.main", }} >
                {post.pattern_name}
              </Typography>
              <Button onClick={clickEditButton}> <EditIcon /> </Button>
            </Box>
            <Typography variant="subtitle1" color="text.secondary">
              Author: <strong>{post?.author || "Unknown"}</strong>
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
              {post.date ? post.date.slice(0, 10) : ""}
            </Typography>

            <Divider sx={{ width: "80%", mb: 2 }} />

            <Typography variant="body1" sx={{ lineHeight: 1.7, textAlign: "justify", color: "text.primary", maxWidth: "90%", }} >
              {post.description}
            </Typography>
          </CardContent>
        </Card>
        ) : (<EditablePatternView post={post} onCancel={onCancel} /> )}
        
        <Card sx={{ flex: 1, minWidth: 350, maxWidth: 550, maxHeight: '68vh', boxShadow: 2, 
          borderRadius: 3, backgroundColor: "#fff", p: { xs: 2, md: 3 }, overflowY: 'auto'}}>
          <PatternGenerator patternInfo={patternConfig} />
        </Card>
      </Box>
    </ Box>
  );

}