let currentTool = "";

function showTool(tool) {
    currentTool = tool;
    document.getElementById("toolBox").classList.remove("hidden");

    if (tool === "posts") {
        document.getElementById("toolTitle").innerText = "✍️ كتابة بوستات احترافية";
    }
    else if (tool === "ideas") {
        document.getElementById("toolTitle").innerText = "💡 توليد أفكار محتوى";
    }
    else if (tool === "titles") {
        document.getElementById("toolTitle").innerText = "🔥 كتابة عناوين قوية";
    }
    else if (tool === "scripts") {
        document.getElementById("toolTitle").innerText = "🎥 كتابة سكريبتات فيديو";
    }
}

function generate() {
    const text = document.getElementById("userInput").value;
    let output = "";

    if (currentTool === "posts") {
        output = "بوست احترافي:\n\n" +
        "✨ " + text + "\n\n" +
        "CTA: تابعنا للمزيد!";
    }

    if (currentTool === "ideas") {
        output = "أفكار محتوى:\n\n- " + text +
        "\n- فكرة ٢\n- فكرة ٣";
    }

    if (currentTool === "titles") {
        output = "عناوين قوية:\n\n- " +
        text + " (عنوان جذاب)";
    }

    if (currentTool === "scripts") {
        output = "سكريبت فيديو:\n\n" +
        "🔥 بداية قويّة: " + text + "\n" +
        "📌 الفكرة الأساسية\n" +
        "🎯 الخاتمة + CTA";
    }

    document.getElementById("result").innerText = output;
}
