#!/usr/bin/env python3
"""
Syncs partials/header.html and partials/footer.html into every page in this
folder that contains a matching <header>/<footer> block.

Usage:
    1. Edit partials/header.html or partials/footer.html
    2. Run: python3 build.py
    3. Every page's header/footer is rewritten to match the partial.

Pages that don't have the shared header/footer (e.g. the transactional
success screens, which intentionally suppress site chrome) are left alone —
this script only touches a file if it finds the block to replace.
"""
import glob
import re

HEADER_PATTERN = re.compile(r'<header class="sticky top-0 w-full flex justify-between.*?</header>', re.S)
FOOTER_PATTERN = re.compile(r'<footer class="bg-primary text-white py-16.*?</footer>', re.S)

def main():
    header = open("partials/header.html", encoding="utf-8").read()
    footer = open("partials/footer.html", encoding="utf-8").read()

    changed = []
    skipped = []
    for path in sorted(glob.glob("*.html")):
        content = open(path, encoding="utf-8").read()
        original = content
        content = HEADER_PATTERN.sub(lambda m: header, content, count=1)
        content = FOOTER_PATTERN.sub(lambda m: footer, content, count=1)
        if content != original:
            open(path, "w", encoding="utf-8").write(content)
            changed.append(path)
        elif not HEADER_PATTERN.search(original) and not FOOTER_PATTERN.search(original):
            skipped.append(path)

    print(f"Synced header/footer into {len(changed)} file(s):")
    for f in changed:
        print(f"  - {f}")
    if skipped:
        print(f"Skipped {len(skipped)} file(s) with no shared header/footer block:")
        for f in skipped:
            print(f"  - {f}")

if __name__ == "__main__":
    main()
