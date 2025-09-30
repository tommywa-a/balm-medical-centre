"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { toast } from "sonner";
import { Copy } from "lucide-react";

export const EmailCTASection = () => {
  const { email } = siteConfig;
  return (
    <div className="lg:col-span-3">
              <Card className="border-2 border-blue-100 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Email Us Directly</CardTitle>
                  <CardDescription>
                    Have questions or need to schedule an appointment? Send us an email and we&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center py-12">
                  <div className="max-w-md mx-auto">
                    <div className="flex items-center justify-center h-20 w-20 mx-auto mb-6 rounded-full bg-blue-100 text-blue-600">
                      <Mail className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Send us an email</h3>
                    <p className="text-gray-600 mb-6">
                      We&apos;re here to help and answer any questions you might have.
                    </p>
                    <div className="flex flex-row gap-4 justify-center">
                      <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 flex-1">
                        <a href={`mailto:${email}`}>
                          <Mail className="mr-2 h-5 w-5" />
                          Email Us
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="flex-1"
                        onClick={async () => {
                          try {
                            // Modern clipboard API first
                            if (navigator.clipboard) {
                              await navigator.clipboard.writeText(email);
                            } else {
                              // Fallback for older browsers
                              const textArea = document.createElement('textarea');
                              textArea.value = email;
                              textArea.style.position = 'fixed';  // Avoid scrolling to bottom
                              document.body.appendChild(textArea);
                              textArea.focus();
                              textArea.select();
                              
                              try {
                                const successful = document.execCommand('copy');
                                if (!successful) {
                                  throw new Error('Copy command was unsuccessful');
                                }
                              } catch (err) {
                                throw new Error('Copy command not supported');
                              } finally {
                                document.body.removeChild(textArea);
                              }
                            }
                            toast.success('Email address copied to clipboard!');
                          } catch (err) {
                            console.error('Failed to copy email: ', err);
                            // Fallback: Show the email in a prompt as a last resort
                            prompt('Press Ctrl+C (or Cmd+C) to copy the email:', email);
                            toast.error('Email address selected - copy it manually');
                          }
                        }}
                      >
                        <Copy className="mr-2 h-5 w-5" />
                        Copy Email
                      </Button>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">
                      We typically respond within 24 hours on business days.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
  )
}