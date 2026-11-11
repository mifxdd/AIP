from docx import Document
import sys

# Simple CLI tool to extract text from a DOCX file and print to stdout

def extract_text_from_docx(path: str) -> str:
    try:
        doc = Document(path)
    except Exception as e:
        raise SystemExit(f"Error reading DOCX file: {e}")
    lines = []
    for para in doc.paragraphs:
        text = (para.text or "").strip()
        if text:
            lines.append(text)
    return "\n".join(lines)


def main():
    if len(sys.argv) < 2:
        print("Usage: python extract_docx_text.py <path_to_docx>")
        sys.exit(1)
    path = sys.argv[1]
    text = extract_text_from_docx(path)
    # Write output to utf-8 file to avoid encoding issues
    with open("materials.txt", "w", encoding="utf-8") as f:
        f.write(text)
    print("DONE_WRITE")

if __name__ == "__main__":
    main()
