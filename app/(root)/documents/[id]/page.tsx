import React from "react";
import { Editor } from "@/components/editor/Editor";
import Header from "@/components/Header";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

type Props = {};

const Document = (props: Props) => {
    return (
        <div>
            <Header>
                <div className="flex w-fit items-center justify-center gap-2">
                    <p className="document-title">Share</p>
                </div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </Header>
            <Editor />
        </div>
    );
};

export default Document;
